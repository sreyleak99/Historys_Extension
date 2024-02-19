
export default class FilteredList extends Component {
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
            return item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }

    componentWillMount() {
        this.setState({ items: this.state.initialItems })
    }

    render() {
        return (
            <div className="filter-list" style={this.props.colorStyle}>
                <input type="text" placeholder="Search" onChange={this.filterList.bind(this)} />
                <List items={this.state.items} onClick={this.props.onClick} />
            </div>
        );
    }
}

FilteredList.propTypes = {
  initialItems: React.PropTypes.array,
  onClick: React.PropTypes.func,
  colorStyle: React.PropTypes.any,
};

class List extends Component {
    render() {
        return (
            <ul> 
            {
                this.props.items.map((item, i) => {
                    let faviconUrl = `https://www.google.com/s2/favicons?domain=${item.url}`;
                    return (
                        <div key={i}>
                            <li key={i} style={{"listStyleImage":`url('${faviconUrl}')`}} data-url={item.url} onClick={this.props.onClick}>
                                {item.title}
                            </li>
                        </div>
                    )
                })
            }
            </ul>
        );
    }
}

List.propTypes = {
  items: React.PropTypes.array,
  onClick: React.PropTypes.func
};