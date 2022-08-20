import React from 'react'
import './index.scss'
import axios from 'axios'

class InformationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      page: 1,
      limit: 10,
      total: 200,
    }
  }

  setPage(page) {
    this.setState({
      page
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3000/react15/information/list').then(res => {
      const { list, page, limit, total } = res.data
      this.setState({
        list,
        page,
        limit,
        total,
      })
    })
  }

  render() {
    const { noPagination = false } = this.props
    const { list, page, limit, total } = this.state
    return (
      <div className="information-list-container">
        {/* todolist */}
      </div>
    )
  }
}

export default InformationList
