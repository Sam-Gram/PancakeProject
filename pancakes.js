var pancakeStyle = {
  backgroundColor : 'black',
  width : '10em',
  height : '1em',
  borderRadius : '8px',
  marginTop: '2px',
  marginBottom: '2px',
  marginRight: 'auto',
  marginLeft: 'auto',
  background: 'linear-gradient( burlywood, brown)'
};


var Pancake = React.createClass({
  handleClick: function (event) {
    console.log(this.props.data);
  },

  render: function () {
    pancakeStyle.width = this.props.data + "em";
    return (
      <div style={pancakeStyle} onClick={this.handleClick}>&nbsp;</div>
    );
  }
});

var PancakeStack = React.createClass({
  changeStack: function (argument) {
    
  },


  getInitialState : function () {
    var myArray = [];
    _.times(20, function(i) {
      myArray.push(_.random(i+3, 20))
    });
    myArray = _.uniq(myArray);
    return {
      pancakeList : myArray
    };
  },

  render: function () {
    return (
      <div>
        {this.state.pancakeList.map(function(pPancake) {
          return <Pancake key={pPancake} data={pPancake} />
        })}
      </div>
    );
  }
});



// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

// React.render(
//   <CommentBox />,
//   document.getElementById('content')
// );

React.render(
  <PancakeStack />,
  document.getElementById('content')
);
