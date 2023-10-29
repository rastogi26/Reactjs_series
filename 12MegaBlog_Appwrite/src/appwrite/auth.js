import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// main advantage of class is the frontend will not disturb if in the future if the backend changes , the methods will remain same only little bit changes are required acconding to the backend choose
export class AuthService {
  // we did not use direct code instead use class because whenever the new object is created then the constructor call and make the client and account

  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwritePojectId);
    this.account = new Account(this.client);
  }

  //method/functionality 1 createAccount
  // we are creating a general method so that it will be compatible to any backend like firebase or our won custom , just need a little bit chaange
  async createAccount({ email, password, name }) {
    try {
      // wait to create an account and also id is compulsary as a first parameter in this appwrite method to create account. benefit only change things in underhood
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // if exist call another method i.e instead of diaplaying message directly go to login
        return this.login({ email, password });
      } else {
        //if not exist or may be null
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //functionality 2 Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //functionality 3

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    //if we dont find the current user
    return null;
  }

  //functionality 4
  async logout() {
    try { 
        //remove the user from all the browsers
         await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }
}

//create object
const authService = new AuthService();

//export object
export default authService;
