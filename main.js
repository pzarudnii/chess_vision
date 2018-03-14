const cv = require('opencv');
const RED = [0, 0, 255];

const WHITE = [255, 255, 255];
const WHITE_MIN = [45, 45, 45];

const HSV_WHITE = [20, 110, 100];
const HSV_WHITE_MIN = [10 , 100 , 75];

const minArea = 600;
const maxArea = 1200;

cv.readImage('./test_imgs/1.jpg', (err, im) => {
    if (err) throw err;

    const window = new cv.NamedWindow('Image', 1);
    const cannyWindow = new cv.NamedWindow('Canny', 1);
    //const resultWindow = new cv.NamedWindow('Result', 1);

    im.resize(640, 480);
    //console.log(im.size());



    window.show(im);

    const out = im.copy();
    const im_canny = im.copy();
    //im_canny.convertHSVscale();
    im_canny.convertGrayscale();
    //im_canny.inRange(HSV_WHITE_MIN, HSV_WHITE);
    //im_canny.canny(200,380);

    //im_canny.dilate(2);
    //im_canny.houghLinesP();

    //im_canny.cvtColor('CV_BGR2GRAY');
    im_canny.adaptiveThreshold(155, 0, 0, 11, 12);

    cannyWindow.show(im_canny);

    // const contours = im_canny.findContours();
    //
    //
    //
    // for (let i = 0; i < contours.size(); i++) {
    //
    //     let area = contours.area(i);
    //     if (area < minArea || area > maxArea) continue;
    //
    //     var arcLength = contours.arcLength(i, true);
    //     contours.approxPolyDP(i, 0.1 * arcLength, true);
    //
    //     if (contours.cornerCount(i) != 4) continue;
    //
    //     let points = [
    //         contours.point(i, 0),
    //         contours.point(i, 1),
    //         contours.point(i, 2),
    //         contours.point(i, 3)
    //     ];
    //
    //     out.line([points[0].x,points[0].y], [points[2].x, points[2].y], RED);
    //     out.line([points[1].x,points[1].y], [points[3].x, points[3].y], RED);
    // }
    //
    // resultWindow.show(out);

    window.blockingWaitKey(60000);
});