import React from "react";
import getTableData from "../Service";
import Table from "./table";

class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: null
    };
  }
  async componentDidMount() {
    getTableData().then((Response) => {
      console.log(" Response==>", Response);
      this.setState({
        responseData: Response
      });
    });
  }

  render() {
    const { responseData } = this.state;
    console.log("===> responseData", responseData);
    return <Table data={responseData} />;
  }
}
export default TableWrapper;
