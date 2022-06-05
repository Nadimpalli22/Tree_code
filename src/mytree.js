import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

export default class extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.chart = new OrgChart(this.divRef.current, {
            nodes: this.props.nodes,
            layout: OrgChart.treeLeftOffset,
            enableTouch: false,
            nodeBinding: {
                field_0: "Name",
                field_1: "PartnerName",
                field_2: "village",
                field_3: "Children",
                field_4: "",
                field_5: "",
                img_0: "img"
            },
            toolbar: {
                zoom: true,
                fit: true,
                fullScreen: true
            },
        });
        //default height fix
        document.getElementById('tree').style.height = "1200px";

    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}