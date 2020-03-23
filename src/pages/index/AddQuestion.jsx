import Taro, { Component } from '@tarojs/taro'
import { View, Input, Textarea, Button } from '@tarojs/components'

import Dailog from './Dailog'

import './addQuestion.less'

export default class AddQuestion extends Component {

    constructor(props) {
        super(props)
        this.state={
            title: '',
            desc: ''
        }
    }


    hideModel = () => {
        
        // console.log(this.props);
        this.props.onHideModel()
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onTextChange = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    btnOk = () => {
        // console.log(this.state.title, this.state.desc);
        
        if (this.state.title && this.state.desc) {
            const { title, desc } = this.state
            this.props.submitQs({title, desc})
        } else {
            Taro.showToast({
                title: '请输入问题或描述...',
                icon: 'none',
            })
        }
    }
       
    

    render() {
        return (
            <Dailog>
                <View className='add-question'>
                    <View className='question-body'>
                        <Input onInput={this.onTitleChange} className='question-title' placeholder='请输入遇到的问题'></Input>
                        <Textarea onInput={this.onTextChange} className='question-desc' placeholder='具体描述'></Textarea>
                        <View className='btn-group'>
                            <Button 
                              className='question-btn ok'
                              onClick={this.btnOk}
                            >
                                确定
                            </Button>
                            <Button 
                              className='question-btn cancle'
                              onClick={this.hideModel}
                            >
                                取消
                            </Button>
                        </View>
                    </View>
                </View>
            </Dailog>
        )
    }
}