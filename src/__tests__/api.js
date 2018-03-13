import fetchPhotosJson from '../api/photosApi';

test('api returns data', () => {
    fetchPhotosJson().then(data=>{
        expect(data.length).toBeGreaterThan(0);
    });
});

test('api returns 5000 values', () => {
    fetchPhotosJson().then(data=>{
        expect(data.length).toBe(5000);
    });
});


test('test', ()=>{
    expect(1+1).toBe(2);
})