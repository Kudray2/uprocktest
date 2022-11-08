import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

const usersDB = [
  {
    id: 1,
    userEmail: "user1@users.com",
    userPassword: "user1",
    userName: "Mike",
    userLastName: "Smith",
    userPosts: 1,
  },
  {
    id: 2,
    userEmail: "user2@users.com",
    userPassword: "user2",
    userName: "Bob",
    userLastName: "Boses",
    userPosts: 44,
  },
  {
    id: 3,
    userEmail: "user3@users.com",
    userPassword: "user3",
    userName: "Sarah",
    userLastName: "Connor",
    userPosts: 13,
  },
  {
    id: 4,
    userEmail: "user4@users.com",
    userPassword: "user4",
    userName: "Derek",
    userLastName: "Moroh",
    userPosts: 2,
  },
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/login", (req, res) => {
  const reqEmail = req.body.userEmail;
  const reqPassword = req.body.userPassword;
  const userToLogin = usersDB.filter(
    (user) => user.userEmail === reqEmail && reqPassword === user.userPassword
  );
  if (userToLogin.length > 0) {
    return res.json(userToLogin[0]);
  } else res.sendStatus(401);
});
app.listen(7000, () => console.log("server started on 7000"));
