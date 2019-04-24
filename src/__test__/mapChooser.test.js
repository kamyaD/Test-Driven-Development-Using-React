import mapChooser from '../containers/mapChooser';
// import { isMainThread } from 'worker_threads';

describe("mapChooser", function() {
    it("returns an image file name based on input given to it ", function(){
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    })

    it("returns a default image when no inputis given", function(){
        let expected = "default.jpg";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});