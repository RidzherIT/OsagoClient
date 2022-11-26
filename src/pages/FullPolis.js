import React, { useContext, useState } from 'react';
import Payment from './subpages/Payment';
import Thanks from './subpages/Thanks';
import RequisitesForm from './subpages/RequisitesForm';
import PolisAccept from './subpages/PolisAccept';
import InputsForm from './subpages/InputsForm';
import CalculationForm from './subpages/CalculationForm';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
export default observer(function FullPolis() {
    const { store } = useContext(Context);

    const polis = store.dataPolis.polis;
    // osago, dgo, greencard, tourists, casco, weapon, notary, realty, covid, health, assistans
    const polisTitle = store.dataPolis.polisTitle;
    const polisType = store.dataPolis.polisType;
    console.log(polisTitle, polisType)
    const other = polis == 'dgo' || polis == 'casco' || polis == 'weapon' || polis == 'notary' || polis == 'realty' || polis == 'covid' || polis == 'health' || polis == 'assistans' || false;
    const polisBool = other ? 'other' : polis;

    const { franschiza, img, name, sale } = store.dataCompany;
    const isInfoInputs = store.isInfoInputs;
    const email = isInfoInputs.find(elem => elem.name == 'email');

    const calcInfo = store.calcInfo;
    const typeAuto = calcInfo.find(elem => elem['typeAuto']) || '';
    const volumeAuto = calcInfo.find(elem => elem['volumeAuto']) || '';
    const direction = calcInfo.find(elem => elem['direction']) || '';
    const purpose = calcInfo.find(elem => elem['purpose']) || '';
    const valueTourists = calcInfo.find(elem => elem['valueTourists']) || '';
    const [calculationFormNext, setCalculationFormNext] = useState(true);
    const [polisAcceptNext, setPolisAcceptNext] = useState(false);
    const funcPolisAcceptNext = (bool) => {
        setPolisAcceptNext(bool);
        setCalculationFormNext(false);
    }
    const [inputsFormNext, setInputsFormNext] = useState(false);
    const funcInputsFormNext = (bool) => {
        setInputsFormNext(bool);
        setPolisAcceptNext(false);
    }
    const [requisitesFormNext, setRequisitesFormNext] = useState(false);
    const funcRequisitesFormNext = (bool) => {
        setRequisitesFormNext(bool);
        setInputsFormNext(false);
    }
    const [paymentNext, setPaymentNext] = useState(false);
    const funcPaymentNext = (bool) => {
        setPaymentNext(bool);
        setRequisitesFormNext(false);
    }
    const [thanksNext, setThanksNext] = useState(false);
    const funcThanksNext = (bool) => {
        setThanksNext(bool);
        setPaymentNext(false);
    }




    return (
        <>
            {calculationFormNext && <CalculationForm funcNextComponent={funcPolisAcceptNext} polis={polisBool} polisTitle={polisTitle} />}
            {polisAcceptNext && <PolisAccept funcNextComponent={funcInputsFormNext} polis={polis} polisName={name} polisSale={sale} polisType={polisType} polisImg={img} polisFranschiza={franschiza} polisDate={'Backend'} polisTypeAuto={typeAuto.typeAuto} polisVAuto={volumeAuto.volumeAuto} polisWay={direction.direction} polisPeople={valueTourists.valueTourists} polisPurpose={purpose.purpose} />}
            {inputsFormNext && <InputsForm funcNextComponent={funcRequisitesFormNext} polis={polis} polisName={name} polisSale={sale} polisType={polisType} polisImg={img} polisFranschiza={franschiza} polisDate={'Backend'} polisTypeAuto={typeAuto.typeAuto} polisVAuto={volumeAuto.volumeAuto} polisWay={direction.direction} polisPeople={valueTourists.valueTourists} polisPurpose={purpose.purpose} />}
            {requisitesFormNext && <RequisitesForm funcNextComponent={funcPaymentNext} polis={polis} polisName={name} polisSale={sale} polisType={polisType} polisImg={img} polisFranschiza={franschiza} polisDate={'Backend'} polisTypeAuto={typeAuto.typeAuto} polisVAuto={volumeAuto.volumeAuto} polisWay={direction.direction} polisPeople={valueTourists.valueTourists} polisPurpose={purpose.purpose} />}
            {paymentNext && <Payment funcNextComponent={funcThanksNext} polisTitle={polisTitle} polisName={name} polisSale={sale} email={email.value} numberStatement={'Backend'} polisType={polisType} />}
            {thanksNext && <Thanks />}
        </>
    )
})