const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`the server is running at PORt is ${PORT}`);
});
