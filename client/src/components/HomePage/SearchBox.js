import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import {} from "reactstrap";

import places from "../../data/phpPlaces";

export default class SearchBox extends React.Component {
    render() {
        const search = "catig";
        let result = [];

        for (var i in places) {
            let region = places[i].region_name;

            if (region.indexOf(search) >= 0) {
                result.push(region);
            } else {
                let provinces = places[i].province_list;
                for (var i in provinces) {
                    console.log(provinces[i]);
                }
            }
        }

        console.log(result);

        return (
            <div>
                <div id="searchbox-label">
                    <h4>Find a vehicle the suits you</h4>
                    <div className="header-subtext">
                        Find a vehicle whereever you are
                    </div>
                </div>
                <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}
