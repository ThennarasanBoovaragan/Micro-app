const getTabledata = async () => {
  let responseData;
  await await fetch(
    "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&order=desc&sort=activity&site=stackoverflow"
  )
    .then((Response) => Response.json())
    .then((findresponse) => {
      //console.log("===>", findresponse);
      responseData = findresponse;
    });

  return responseData;
};

export default getTabledata;
