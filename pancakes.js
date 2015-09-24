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

  render: function () {
    pancakeStyle.width = this.props.data + "em";
    return (
      <div style={pancakeStyle} onClick={this.props.onClick} >&nbsp;</div>
    );
  }
});

var PancakeStack = React.createClass({
  changeStack: function (pVal) {
      
      var pancakes = this.state.pancakeList
      var end = pancakes.indexOf(pVal)
      for (var i = 0; i < end/2; i++) {
	  var temp = pancakes[i]
	  pancakes[i] = pancakes[end-i]
	  pancakes[end-i] = temp
      }
      this.setState({
	  pancakeList: pancakes
      })
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
	    var boundChangeStack = this.changeStack.bind(this, pPancake)
            return <Pancake key={pPancake} data={pPancake} onClick={boundChangeStack} />
        }, this)}
      </div>
    );
  }
});

React.render(
  <PancakeStack />,
  document.getElementById('content')
);
