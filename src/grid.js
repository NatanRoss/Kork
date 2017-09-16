var createReactClass = require('create-react-class');
var React = require('react');
var PropTypes = require('prop-types');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);

var NoCompactingLayout = createReactClass({
  mixins: [PureRenderMixin],

  propTypes: {
    onLayoutChange: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      className: "layout",
      items: 20,
      cols: 48,
      rowHeight: 40,
      onLayoutChange: function() {},
      // This turns off compaction so you can place items wherever.
      verticalCompact: false
    };
  },

  getInitialState() {
    var layout = this.generateLayout();
    return {
      layout: layout
    };
  },

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (<div key={i} className="note"><div><textarea rows="1" className="h2">Header</textarea><textarea className="textarea">Lorem ipsum dolor sit amet</textarea></div></div>);
    });
  },

  generateLayout() {
    var p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
      return {x: i * 9 % 48, y: Math.floor(i / 6) * y, w: 10, h: y, i: i.toString()};
    });
  },


  onLayoutChange: function(layout) {
    this.props.onLayoutChange(layout);
  },
  render() {
    return (
      <div>
      <ReactGridLayout layout={this.state.layout} onLayoutChange={this.onLayoutChange}
          {...this.props}>
        {this.generateDOM()}
      </ReactGridLayout>
      <div  className="add">
        <img alt="add" src="https://openclipart.org/image/2400px/svg_to_png/250266/1464710523.png" />        
      </div>
      </div>
    );
  }
});

module.exports = NoCompactingLayout;