import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import AddQuestion from './AddQuestion'

export default class Index extends Component {

  constructor() {
    super()

    this.state = {
      showQuestionModel: false,
      qsList: []
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  showModel = () => {
    this.setState({
      showQuestionModel: true
    })
  }

  onHideModel = () => {
    this.setState({
      showQuestionModel: false
    })
  }

  // 提交问题
  submitQs = (qs) => {
    const list = this.state.qsList
    // console.log(qs);
    // console.log(list);
    
    list.push(qs)
    this.setState({
      qsList: list
    }, ()=> {
      console.log(this.state)
      
    })

    this.onHideModel()
  }

  render () {
    return (
      <View className='index'>
        {this.state.showQuestionModel ? <AddQuestion submitQs={this.submitQs} onHideModel={this.onHideModel} /> : null}
        <View className='title'>问答模块</View>
        <Button 
          className='question-btn'
          onClick={this.showModel}
        >
          我要提问
        </Button>
      </View>
    )
  }
}
