import React, { Component } from 'react'
import serializeForm from 'form-serialize'


class CreateFamily extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateFamily)
      this.props.onCreateFamily(values)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <div className='create-contact-details'>
            <input type='text' name='lastName' placeholder='Last Name'/>
            <input type='text' name='parent' placeholder='Parent Name'/>
            <input type='number' name='children' placeholder='Number of Children'/>
            <button>Add Family</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateFamily;