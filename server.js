const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require(`dotenv`).config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

//THIS POST IS FOR PAYMENT FORM IN STRIPE
app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;

  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    custom_fields: [
      {
        key: "size",
        label: {
          custom: "size",
          type: "custom",
        },
        dropdown: {
          options: [
            {
              label: "Large (1-inch Width 18-26-inch Length)",
              value: "Large",
            },
            {
              label: "Medium (3/4-inch Width 12-17-inch Length)",
              value: "Medium",
            },
            {
              label: "Small (5/8-inch Width 8-15-Length)",
              value: "Small",
            },
          ],
        },
        type: "dropdown",
      },
    ],
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
    ],
    success_url: "https://www.hikingpawz.com/",
    cancel_url: "https://www.hikingpawz.com/",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like main.js or main.css
  app.use(express.static("client/build"));

  // Express will serve up the index.html file if
  // it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 4000, () =>
  console.log("Listening on port 4000!")
);
