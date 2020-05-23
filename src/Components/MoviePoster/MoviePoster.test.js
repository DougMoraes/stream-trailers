import React from "react";
import { render, waitForElement } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import MoviePoster from "./MoviePoster";

afterEach(() => {
  axios.get.mockClear();
});

test("show loader when it's fetching data, then render film name", async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      original_title: "Fight Club",
      poster_path: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
    }
  });

  const { getByRole, getByTestId } = render(<MoviePoster />);


  expect(getByRole('progressbar')).toBeInTheDocument();

  const movieNameRendered = await waitForElement(() =>
    getByTestId("movie-name")
  );

  expect(movieNameRendered).toHaveTextContent("Fight Club");
  expect(axios.get).toHaveBeenCalledTimes(1);
});
