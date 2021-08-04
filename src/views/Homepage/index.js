import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGallery from '../../common/ImageGallery';

import Searchbar from '../../common/Searchbar';
import {fetchImageData} from '../../redux/action';

let totalPages = 0;
let pageNo = 1;
let prevSearchValue = "";
let totalImages = 0;

class Homepage extends Component {

  state = {
    imageData : [],
  }
  
  render() {
    
    return (
      <div className="container">
        <div>
          <Searchbar handleSearch={this.handleSearch} />
        </div>
        {
          prevSearchValue && (
            <div>
              <h2 className="input-value">{prevSearchValue}</h2>
              <div className="total-images">{totalImages} images has been found</div>
            </div>
          )
        }
        <div>
          <ImageGallery data={this.state.imageData} />
        </div>
        {
          pageNo <= totalPages && (
            <button className="load-btn" onClick={this.handleLoadMore}>Load More</button>
          )
        }
      </div>
    )
  }

  handleLoadMore = async() => {
    pageNo = pageNo + 1
    await this.props.fetchImageData(prevSearchValue, pageNo)
    const imagesArray = this.props.imageData.data.results.map(row => row.urls.small)
    this.setState({
      imageData : [...this.state.imageData , ...imagesArray]
    })
  }

  handleSearch = async (searchValue) => {
    await this.props.fetchImageData(searchValue, 1)
    pageNo = 1
    totalPages = this.props.imageData.data.total_pages
    totalImages = this.props.imageData.data.total
    prevSearchValue = searchValue
    const imagesArray = this.props.imageData.data.results.map(row => row.urls.small)
    this.setState({
      imageData : imagesArray
    })
  }

}

const mapStateToProps = ( state ) => ({
  imageData: state
})

export default connect(mapStateToProps, {fetchImageData})(Homepage);