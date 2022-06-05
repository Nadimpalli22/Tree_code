import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

export default class extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
        console.log('asas');

    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.chart = new OrgChart(this.divRef.current, {
            nodes: this.props.nodes,
            // layout: OrgChart.treeLeftOffset,

            nodeBinding: {
                field_0: "Name",
                field_1: "PartnerName",
                field_2: "village",
                field_3: "",
                field_4: "",
                field_5: "",
                img_0: "img"
            },
            toolbar: {
                layout: true,
                zoom: true,
                fit: true,
                expandAll: true,
                fullScreen: true
            },

        });
        //default height fix
        document.getElementById('tree').style.height = "1200px";


        console.log('hello', this.chart);
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}