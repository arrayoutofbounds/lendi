import fetchPhotosJson from '../api/photosApi';

describe("api", () => {
    it("returns data", () => {
        fetchPhotosJson().then(data=>{
            expect(data.length).toBeGreaterThan(0);
        });
    });
    it("returns 5000 values", () => {
        fetchPhotosJson().then(data=>{
            expect(data.length).toBe(5000);
        });
    });
});