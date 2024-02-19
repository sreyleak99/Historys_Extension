var $ = require("jquery");

export default class FilteredListWithDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialItems: this.props.initialItems,
            items: []
        }
    }

    filterList(event) {
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }

    componentWillMount() {
        this.setState({ items: this.state.initialItems })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="filter-list" style={this.props.colorStyle}>
                <input type="text" placeholder="Search" onChange={this.filterList.bind(this)} />
                <List items={this.state.items} onClipBoard={this.props.onClipBoard} />
            </div>
        );
    }
}

FilteredListWithDelete.propTypes = {
  initialItems: React.PropTypes.array,
  onClipBoard: React.PropTypes.func,
  colorStyle: React.PropTypes.any,
};

class List extends Component {
    render() {
        return (<ul>
            {
                this.props.items ? this.props.items.map((item, i) => {
                    return (
                        <div key={i}>
                            <li key={i} data-item={item} data-balloon="Click to copy" data-balloon-pos="down" onClick={this.props.onClipBoard}>
                                {item}
                            </li>
                        </div>
                    )
                }) : <div />
            }
        </ul>);
    }
}

List.propTypes = {
  items: React.PropTypes.array,
  onClipBoard: React.PropTypes.func
};