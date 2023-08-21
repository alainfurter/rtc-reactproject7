/**
 * @vitest-envirment jsdom
 * 
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Logo from "../components/Header/HeaderLogo";

describe("Logo", () => {
    test("Logo should have the logo alt text", () => {
        render(<Logo src="images/logo.png" alt="Logo" />);
        expect(screen.getByRole("img")).toHaveAttribute("alt", "Logo");
    });
});
