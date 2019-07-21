import React, {Component} from 'react'

export default class FileInput  extends Component{
 

  onChange = (event) => {
    const { input: { onChange } } = this.props
    onChange(event.target.files[0])
  }

  render(){
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div><label>{label}</label>
     <div>
       <input
        type='file'
        accept='.jpg, .png, .jpeg'
        onChange={this.onChange}
       />
     </div>
     </div>
    )
}
}