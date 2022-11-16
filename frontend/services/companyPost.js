import api from "./api";

function companyPost(object) {
  api.post("/api/Company/RegisterCompany", object).then((response) => {
    console.log(response.status);
  });
}

export { companyPost };
