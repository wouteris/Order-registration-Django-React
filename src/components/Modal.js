import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class sCustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Product</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="product-productcode">Code</Label>
              <Input
                type="text"
                id="product-productCode"
                name="productCode"
                value={this.state.activeItem.productCode}
                onChange={this.handleChange}
                placeholder="Enter product code"
              />
            </FormGroup>
            <FormGroup>
              <Label for="product-productDescription">Description</Label>
              <Input
                type="text"
                id="product-productDescription"
                name="productDescription"
                value={this.state.activeItem.productDescription}
                onChange={this.handleChange}
                placeholder="Enter product description"
              />
            </FormGroup>
           
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}