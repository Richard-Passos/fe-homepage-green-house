import { renderHook, waitFor } from "@testing-library/react";
import useCountdown from "./useCountdown";

describe("Countdown hook", () => {
  it("should render properly", async () => {
    const initialValue = 100;

    const { result } = renderHook(() => useCountdown(initialValue, 1));

    expect(result.current).toBe(initialValue);
    await waitFor(() => expect(result.current).toBeLessThan(initialValue));
  });
});
