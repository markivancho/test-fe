export const QUESTIONS = [
  {
    title: "What is Your Name?",
    fields: [
      {
        name: "first_name",
        label: "First Name",
        type: "text",
        validation: {
          required: "This field is required",
          pattern: {
            value: /^.{3,128}$/,
            message: "Please insert 3-128 characters",
          },
        },
        control: "input",
      },
      {
        name: "last_name",
        label: "Last Name",
        type: "text",
        validation: {
          required: "This field is required",
          pattern: {
            value: /^.{3,128}$/,
            message: "Please insert 3-128 characters",
          },
        },
        control: "input",
      },
    ],
  },
  {
    title: "How Can We Reach Out to You?",
    fields: [
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        mask: "(999) 999-9999",
        validation: {
          required: "This field is required",
          pattern: {
            value: /^(\([1-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
            message: "Please use US number",
          },
        },
        control: "mask",
      },
    ],
  },
  {
    title: "Where is Your House Located In?",
    fields: [
      {
        name: "state",
        label: "State",
        type: "state",
        control: "select",
        validation: {
          required: "This field is required",
        },
      },
    ],
  },
];

// Could've been async getOptions in select, but for test purposes hardcode
export const getSelectOptions = (provider) => [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PW", label: "Palau" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];
