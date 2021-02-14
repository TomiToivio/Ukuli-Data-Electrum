const Iota = require('@iota/core');
const Converter = require('@iota/converter');
const iota = Iota.composeAPI({
provider: 'http://ukuli.fi:14265'
});
const depth = 3;
const minimumWeightMagnitude = 9;
const address =
'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
const seed =
'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
const message = JSON.stringify({"message": "Hello world"});
const messageInTrytes = Converter.asciiToTrytes(message);
const transfers = [
{
    value: 0,
    address: address,
    message: messageInTrytes
}
];
iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then(bundle => {
        console.log(bundle[0].hash)
    })
    .catch(err => {
        console.error(err)
    });
