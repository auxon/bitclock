import {UpdateFn, BitDigit, BitTime} from './bitclock';

const buildBitHtml = (bit: number): string =>
    `<div class="bit ${bit ? 'on' : 'off'}">${bit}</div>`;

const buildBitDigitHtml = (bitDigit: BitDigit): string =>
    bitDigit.map((bit: number): string =>
        `<div class="digit">
            ${buildBitHtml(bit)}
        </div>`
    ).join('');

const buildBitTimeHtml = (bitTime: BitTime): string =>
    bitTime.map((bitDigit: BitDigit): string =>
        `<div class="digit">
            ${buildBitDigitHtml(bitDigit)}
        </div>`
    ).join('');

const arrayLikeToArray = (arrayLike: any): any[] =>
    [].slice.call(arrayLike);

const getClockDivs = (): HTMLElement[] => {
    let elementCollection: HTMLCollection = document.getElementsByClassName('clock-div');
    return arrayLikeToArray(elementCollection);
};

const updateClockDiv = (clockElement: HTMLElement, bitTime: BitTime): void => {
    clockElement.innerHTML = buildBitTimeHtml(bitTime);
};

const updateClockDivs: UpdateFn = (bitTime: BitTime): void =>
    getClockDivs().forEach((clockDiv: HTMLElement) =>
        updateClockDiv(clockDiv, bitTime));


export { updateClockDivs as update };