export enum Dietary {
  GlutenFree,
  Vegetarian,
  Vegan,
}

export const foodInfo = [
  {
    date: "Saturday, Febuary 3rd",
    events: [
      {
        title: "Dinner",
        items: [
          {
            name: "Goyaki Yerba Mate",
            dietary: [Dietary.Vegetarian],
          },
          {
            name: "Secret Snack",
            dietary: [],
          },
        ],
        provider: "Panda Express",
        time: "5:00 pm",
      },
    ],
  },
  {
    date: "Friday, Febuary 4th",
    events: [
      {
        title: "Breakfast",
        items: [
          {
            name: "Bagels and Cream Cheese",
            dietary: [Dietary.Vegetarian],
          },
          {
            name: "Coffee",
            dietary: [],
          },
        ],
        provider: "The Bagelry",
        time: "8:00 am",
      },
      {
        title: "Lunch",
        items: [
          {
            name: "TBD",
            dietary: [],
          },
          {
            name: "TBD",
            dietary: [],
          },
        ],
        provider: "Woodstock's Pizza",
        time: "1:00 pm",
      },
      {
        title: "Dinner",
        items: [
          {
            name: "TBD",
            dietary: [],
          },
          {
            name: "TBD",
            dietary: [],
          },
        ],
        provider: "TBD",
        time: "5:30 pm",
      },
    ],
  },
  {
    date: "Saturday, Febuary 5th",
    events: [
      {
        title: "Breakfast",
        items: [
          {
            name: "Bagels and Cream Cheese",
            dietary: [Dietary.Vegetarian],
          },
          {
            name: "Coffee",
            dietary: [],
          },
        ],
        provider: "The Bagelry",
        time: "9:00 am",
      },
      {
        title: "Lunch",
        items: [
          {
            name: "TBD",
            dietary: [],
          },
          {
            name: "TBD",
            dietary: [],
          },
        ],
        provider: "Ike's",
        time: "12:00 pm",
      },
    ],
  },
]
