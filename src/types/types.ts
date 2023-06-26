import { ReactNode } from "react";

//context
export interface ChildTypes {
    children: ReactNode;
}



//my games
export interface MyGameType {
    id: string | undefined;
    picture: string;
    genre: string;
    publisher: string;
    title: string;
    price: number;
    oldPrice: number;
    quantity: number;
    currencyFormat: string;
    platform: string[];
    text: string;
    video: string;
    status: string;
    discount: boolean;
}




  //faqType
  export interface FaqType{
    id: string;
    question: string;
    answer: string;
  }

  //articles
  export interface MyArticleType {
    id: string;
    picture: string[];
    genre: string;
    publisher: string;
    title: string;
    releaseDate: string;
    text: string;
    video: string;
}

  //account
  export interface MyAccountType {
    id: string;
    ign: string;
    accountCreated: string;
    email: string;
    gamesOwned: number,
    hoursPlayed: number,
    lastPlayed: string;
}

//stats
export interface MyGameStatsType{
    id: string;
    month: string;
    gamesPurchased: number;
}
// categories
export interface CategoriesType {
  id: string;
  title: string;
  backgroundImg: string;
  icon: string;
  genre: string;
}

// privacy & terms
export interface PrivacyType{
  title: string;
  description: string;
  part1: string;
  part1text: string;
  part2: string;
  part2text: string;
  part3: string;
  part3text: string;
  part4: string;
  part4text: string;
  part5: string;
  part5text: string;
  part6: string;
  part6text: string;
  part7: string;
  part7text: string;
}

export interface TermsType{
  title: string;
  part1: string;
  part1text: string;
  part2: string;
  part2text: string;
  part3: string;
  part3text: string;
  part4: string;
  part4text: string;
  part5: string;
  part5text: string;
  part6: string;
  part6text: string;
}

//feedbackType
export interface FeedbackTypes{
    author: string | undefined;
    subject: string;
    message: string;
}

//friendType (API)
interface Coordinates {
    lat: number;
    lng: number;
  }
  
  interface Hair {
    color: string;
    type: string;
  }
  
  interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
  }
  
  interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  }
  
  interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
  }
  
 export interface FriendType {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
  }