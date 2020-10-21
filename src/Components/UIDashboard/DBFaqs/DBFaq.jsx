import React from 'react';
import Faq from 'react-faq-component';
const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  arrowColor: "blue",
  rowContentTextSize: '14px',
  rowTitleTextSize: '14px'
};
const config = {
  animate: true
};
const data = {
  title: "FAQs",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet?",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum?",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla?",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version?",
      content: "What is the package version"
    }]
}

function DBFaq(props) {
    return (
            <div className="col col-sm-12 col-md-6">
                <Faq data={data} styles={styles} config={config} />
            </div>
    );
}

export default DBFaq;