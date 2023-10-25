const userServices = require("./models/user-services");

// describe("Connection", () => {
//   beforeAll(async () => {
//     await mongoose.connect(
//       "mongodb+srv://" +
//         process.env.MONGO_USER +
//         ":" +
//         process.env.MONGO_PWD +
//         "@" +
//         process.env.MONGO_CLUSTER +
//         "/" +
//         process.env.MONGO_DB +
//         "?retryWrites=true&w=majority",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//   });
test("test db query user Joe", async () => {
  let result = await userServices.findUserByName("Joe");

  // expected = {
  //   _id: ObjectId("600f49555f2c7e977e0652c8"),
  //   job: "Mailman",
  //   name: "Joe",
  // };

  expect(result[0].name).toBe("Joe");
  expect(result[0].job).toBe("Mailman");

  // afterAll(async () => {
  //   mongoose.disconnect();
  // });
});
