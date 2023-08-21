/**
 * @vitest-envirment jsdom
 * 
 */

import { render, screen } from "@testing-library/react";
import { describe, test ,expect, it } from "vitest";

import Header from "../components/Header/Header";

describe("Header", () => {
    test("Header should have the logo image", () => {
        render(<Header/>);
        expect(screen.getByRole("img")).toHaveAttribute("alt", "Logo");
    });
    test("Heading should contain the correct text", () => {
        render(<Header/>);
        expect(screen.getByRole("heading")).toHaveTextContent("NASA API DEMO");
        // screen.debug();
    });
});
