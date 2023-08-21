/**
 * @vitest-envirment jsdom
 * 
 */

import { render, screen } from "@testing-library/react";
import { describe, test ,expect, it } from "vitest";

import ImageViewer from "../components/Main/ImageViewer/ImageViewer";

const today = new Date(Date.now()).toISOString().slice(0, 10);
const testText = `This image corresponds to the date: ${today}`;
console.log(testText);

const api_test_object = {
    date: '2023-08-21', 
    name: 'Introducing Comet Nishimura', 
    description: 'Will Comet Nishimura become visible to the unaided… USA while sporting a green coma and a thin tail.', 
    image_url: 'https://apod.nasa.gov/apod/image/2308/CometNishimura_Bartlett_1080.jpg'
}

describe("ImageViewer", () => {
    test("ImageViewer should contain the correct text", () => {
        render(<ImageViewer apiObject={api_test_object} />);
        expect(screen.getByText(testText)).toBeVisible();
        // screen.debug();
    });

    test("ImageViewer should contain the name of the object", () => {
        render(<ImageViewer apiObject={api_test_object} />);
        expect(screen.getByText(api_test_object.name)).toBeVisible();
        // screen.debug();
    });

    test("ImageViewer should contain the correct image url", () => {
        render(<ImageViewer apiObject={api_test_object} />);
        expect(screen.getByRole("img")).toHaveAttribute("alt", api_test_object.name);
        expect(screen.getByRole("img")).toHaveAttribute("src", api_test_object.image_url);
        // screen.debug();
    });
});
