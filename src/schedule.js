/* eslint-disable no-unused-vars */

import React from 'react';
import styles from './page.css';


const Day = ({day, date, children}) => (
    <div className={styles.day}>
        <div className={styles.dayHeader}>
            <div className={styles.dayHeaderDay}>{day}</div>
            <div className={styles.dayHeaderDate}>{date}</div>
        </div>
        <div className={styles.dayEntries}>
            {React.Children.map(children, (c, key) => React.cloneElement(c, {key}))}
        </div>
    </div>
);

// There are the hours in the day. This serves as the domain for the y-position
// of the events.
const dMin = 9;
const dMax = 21;

const pct = x => (x*100) + '%';
const fmtTime = x => {
    const h = `${Math.floor(x)}`;
    const m = x === Math.round(x) ? ':00' : (':' + (x - Math.floor(x)).toFixed(2).slice(2));
    return h + m;
}

const DPoint = ({t, label}) => (
    <div className={styles.dPoint} style={{top: pct((t - dMin) / (dMax - dMin))}}>
        <div className={styles.timeHeadline}>{label}</div>
        <div className={styles.timeHours}>{fmtTime(t)}</div>
    </div>
)

const DRange = ({t0, t1, label, type}) => (
    <div className={styles.dTalk + ' ' + (type ? styles['dt-' + type] : '')} style={{top: pct((t0 - dMin) / (dMax - dMin)), height: pct((t1 - t0) / (dMax - dMin))}}>
        <div className={styles.timeHeadline}>{label}</div>
        <div className={styles.timeHours}>{fmtTime(t0)} – {fmtTime(t1)}</div>
    </div>
)

// <DRange t0={14} t1={14.3} label='Bas van Dijk, FP at LumiGuide' />


export default () => (
    <div className={styles.container}>
        <a id='schedule' />
        <h1>Schedule</h1>

        <p>
            Schedule last updated on the 2nd of June (added speaker schedule).
        </p>

        <section className={styles.schedule}>
            <div className={styles.scheduleLabel}>
                <span>{fmtTime(dMin)}</span>
                <span>{fmtTime(dMax)}</span>
            </div>

            <Day day='Friday' date='June 9'>
                <DPoint t={9} label='Doors open and registration (building 4)' />
                <DRange t0={10} t1={11} label='Keynote: Neil Mitchell (building 4 / aula)' />
                <DRange t0={11} t1={12} label='Project presentation (building / aula)' />
                <DRange t0={12.3} t1={14} label='Lunch* at HSR Mensa (vouchers to be bought during registraion, building 4 / mensa)' type='lunch' />
                <DRange t0={16} t1={16.5} label='Talk: Mario Meili (building 4 / aula)' />
                <DRange t0={16.5} t1={17} label='Talk: Cyrill Schenkel (building 4 / aula)' />
                <DRange t0={17} t1={18} label='Keynote: Julie Moronuki (building 4 / aula)' />
                <DRange t0={18} t1={21} label='Pizza* (in front of building 1)' type='lunch' />
            </Day>

            <Day day='Saturday' date='June 10'>
                <DRange t0={10} t1={11} label='Keynote: Stephen Diehl (building 4 / aula)' />
                <DRange t0={12} t1={14} label='Lunch* at HSR Mensa (building 4 / mensa)' type='lunch' />
                <DRange t0={16} t1={17} label='Talk: Nikita Volkov (building 4 / aula)' />
                <DRange t0={17} t1={18} label='Keynote: Simon Thompson (building 4 / aula)' />
                <DRange t0={18} t1={21} label='BBQ* (in front of building 1)' type='lunch' />
            </Day>

            <Day day='Sunday' date='June 11'>
                <DRange t0={10} t1={11} label='Keynote: Edward Kmett (building 4 / aula)' />
                <DRange t0={12} t1={14} label='Lunch* at HSR Mensa (building 4 / mensa)' type='lunch' />
                <DRange t0={15} t1={16} label='Project demos (building 4 / aula)' />
                <DPoint t={17} label='End of event' />
            </Day>
        </section>

        <h2>* Food information</h2>
        <ul>
            <li>
            <p>
                Lunch coupons are sold during registration. A coupon costs CHF 30 and includes lunch for three days.
            </p>

            <ul>
                <li>Friday: Sliced Veal with Rösti</li>
                <li>Saturday: Pasta Italian Style</li>
                <li>Sunday: Sandwich</li>
            </ul>

            <p>
                Vegetarian options are available during every lunch.
            </p>
            </li>

            <li>
            <p>
                On Friday evening, a <a href="https://www.pizzamobil.ch/">mobile pizzeria</a> will visit the venue. Pizzas will cost around CHF 15.
            </p>
            </li>

            <li>
            <p>
                For the BBQ on Saturday, plates, ketchup and mustard will be provided. Bread and around a hundred sausages are available on a first-come, first-served basis.
            </p>
            </li>
        </ul>
    </div>
);
