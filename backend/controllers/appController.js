import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;

    const checkUser = new Promise((resolve, reject) => {
      UserModel.findOne({ username })
        .then((result) => {
          if (result) {
            reject({ error: "Username already exist" });
          }

          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });

    const checkEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email })
        .then((result) => {
          if (result) {
            reject({ error: "Email already exist" });
          }

          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });

    Promise.all([checkUser, checkEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedpassword) => {
              const newUser = new UserModel({
                username,
                email,
                password: hashedpassword,
                profile: profile || "",
              });

              newUser
                .save()
                .then((result) => {
                  return res.status(201).send({ msg: "User registered" });
                })
                .catch((error) => {
                  return res.status(501).send({ error });
                });
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Unable to hash password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req, res) {
  res.json("LOGIn");
}

/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res) {
  res.json("GET USER");
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res) {
  res.json("UPDATE USER");
}

/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res) {
  res.json("Generate OTP");
}

/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("Verify OTP");
}

/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("Reset Session");
}

/** GET: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("Reset Session");
}
