// From request-images-api.js
// /////////////////////////////////
// Використання axios instance

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com",
// });

// HTTP-запит при першому монтуванні компоненту

// export const requestImagesApi = async () => {
//   const response = await instance.get(
//     `/photos/?client_id=s6sOTg-4HffngxAlfYllI_pIwY2-Him-pHFKzypl6TA}`
//   );
//   return response.data;
// };

// HTTP-запит при оновлені компоненту при зміні стану після сабміту форми

// export const requestImagesApiByQuery = async (query = "", page = 1) => {
//   const response = await instance.get(
//     `/search/photos/?client_id=s6sOTg-4HffngxAlfYllI_pIwY2-Him-pHFKzypl6TA&query=${query}&page=${page}`
//   );
//   return response.data;
// };

// /////////////////////////////////
// https://pixabay.com/api/

// const BASE_URL = "https://pixabay.com/api";
// const KEY = "34699567-4c11968861ced30ee65cf0653";

// export const requestImagesApi = async () => {
//   const response = await axios.get(`${BASE_URL}/?key=${KEY}&per_page=8`);
//   console.log(response.data);
//   return response.data;
// };

// export const requestImagesApiByQuery = async (query = "", page = 1) => {
//   const response = await axios.get(
//     `${BASE_URL}/?key=${KEY}&page=${page}&per_page=8&q=${query}`
//   );
//   return response.data;
// };

// //////////////////////////////////////////////////////////
// ///////////////////////////////////////////////
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const FeedbackSchema = Yup.object().shape({
//   data: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

// const SearchBar = ({ onSubmit }) => {
//   const handleSubmit = (inputValue, actions) => {
//     onSubmit(inputValue.data);

//     actions.resetForm();
//   };

//   return (
//     <header className={css.header}>
//       <Formik
//         initialValues={{ data: "" }}
//         onSubmit={handleSubmit}
//         validationSchema={FeedbackSchema}
//       >
//         <Form className={css.headerForm}>
//           <Field
//             className={css.headerInput}
//             type="text"
//             //   autocomplete="off"
//             //   autofocus
//             placeholder="Search images and photos"
//             name="data"
//           />
//           <ErrorMessage component="p" name="data" />
//           <button type="submit">Search</button>
//         </Form>
//       </Formik>
//     </header>
//   );
// };

// export default SearchBar;
