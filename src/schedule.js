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
    const suffix = x <= 12 ? 'AM' : 'PM';
    const h = x <= 12 ? `${Math.floor(x)}` : `${Math.floor(x - 12)}`;
    const m = x === Math.round(x) ? '' : (':' + (x).toFixed(2).slice(2));
    return h + m + suffix;
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
            This schedule is provisional.
            More details will be given prior to the start of the event.
        </p>

        <section className={styles.schedule}>
            <div className={styles.scheduleLabel}>
                <span>{fmtTime(dMin)}</span>
                <span>{fmtTime(dMax)}</span>
            </div>

            <Day day='Friday' date='June 9'>
                <DPoint t={9} label='Doors open' />
                <DRange t0={10} t1={11} label='Keynote talk' />
                <DRange t0={11} t1={12} label='Project presentation' />
                <DRange t0={12.5} t1={14} label='Lunch at HSR Mensa' type='lunch' />
                <DRange t0={17} t1={18} label='Panel Discussion' />
                <DRange t0={18} t1={21} label='BBQ or Hack & Pizza' type='lunch' />
            </Day>

            <Day day='Saturday' date='June 10'>
                <DRange t0={10} t1={11} label='Keynote talk' />
                <DRange t0={12} t1={14} label='Lunch at HSR Mensa' type='lunch' />
                <DRange t0={17} t1={18} label='Keynote talk' />
                <DRange t0={18} t1={21} label='BBQ or Hack & Pizza' type='lunch' />
            </Day>

            <Day day='Sunday' date='June 11'>
                <DRange t0={10} t1={11} label='Keynote talk' />
                <DRange t0={12} t1={14} label='Lunch at HSR Mensa' type='lunch' />
                <DRange t0={15} t1={16} label='Project demos' />
                <DPoint t={17} label='End of event' />
            </Day>
        </section>
    </div>
);
