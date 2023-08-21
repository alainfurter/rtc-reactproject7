/**
 * @vitest-envirment jsdom
 * 
 */

import { render, screen } from "@testing-library/react";
import { describe, test ,expect, it } from "vitest";

import SearchBar from "../components/Main/SearchBar/SearchBar";

const searchBarUpdateCallback = (api, date) => {
    console.log("Test, SearchBar: ", api, ", ", date);
  };

const setDate = (date) => {
    console.log("Test, SearchBar: ", date);
}

const actualDate = new Date(Date.now()).toISOString().slice(0, 10);

describe("SearchBar", () => {
    test("SearchBar should contain the correct text", async () => {
        render(<SearchBar searchUpdateCallback={searchBarUpdateCallback} date={actualDate} setDate={setDate} maxDate={actualDate} />);
        expect(screen.getByText("Choose API and date:")).toBeVisible();
        // screen.debug();
    });
    test("SearchBar should contain the correct date with custom parameters", () => {
        render(<SearchBar searchUpdateCallback={searchBarUpdateCallback} date={'2023-07-21'} setDate={setDate} maxDate={'2023-08-21'} />);
        expect(screen.getByDisplayValue("2023-07-21")).toBeVisible();
        // screen.debug();
    });
});
