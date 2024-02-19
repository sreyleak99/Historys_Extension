

export default class History extends Component {

  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="history">
      <FilteredList initialItems={this.state.history} onClick={this.props.onClick} colorStyle={this.props.colorStyle} />
      </div>
    );
  }
}

History.propTypes = {
  history: React.PropTypes.array,
  onClick: React.PropTypes.func,
  colorStyle: React.PropTypes.any,
};