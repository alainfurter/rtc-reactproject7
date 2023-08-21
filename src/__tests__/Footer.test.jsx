/**
 * @vitest-envirment jsdom
 * 
 */

import { render, screen } from "@testing-library/react";
import { describe, test ,expect, it } from "vitest";

import Footer from "../components/Footer/Footer";

describe("Footer", () => {
    test("Footer should have the copyright text", () => {
        render(<Footer/>);
        expect(screen.getByText('Copyright 2023 Alain Furter')).toBeVisible()
    });
});
