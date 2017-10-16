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

const DRange = ({t0, t1, label, location}) => (
    <div className={styles.dTalk + ' ' + (location ? styles['dt-' + location] : '')} style={{top: pct((t0 - dMin) / (dMax - dMin)), height: pct((t1 - t0) / (dMax - dMin))}}>
        <div className={styles.timeHeadline}>{label}</div>
        <div className={styles.timeHours}>{fmtTime(t0)}<span className={styles.timeHoursTill}> – {fmtTime(t1)}</span></div>
    </div>
)

export default () => (
    <div className={styles.container}>
        <a id='schedule' />
        <h1>Schedule</h1>

        <p>
            All talks and keynotes take place in the <span className={styles.scheduleLegendAula}>aula (building 4)</span>.
            Lunch is served
            in the <span className={styles.scheduleLegendMensa}>mensa (building 4)</span>.
            Pizza and BBQ will be consumed <span className={styles.scheduleLegendOutside}>outside (in front of building 1)</span>.
        </p>

        <section className={styles.schedule}>
            <div className={styles.scheduleLabel}>
                <span>{fmtTime(dMin)}</span>
                <span>{fmtTime(dMax)}</span>
            </div>

            <Day day='Friday' date='June 8'>
                <DPoint t={9} label='Doors open' />
                <DRange t0={10} t1={11} label='Keynote' location='aula' />
                <DRange t0={11} t1={12} label='Project presentation' location='aula' />
                <DRange t0={12.3} t1={14} label='Lunch' location='mensa' />
                <DRange t0={14} t1={15} label='Keynote' location='aula' />
                <DRange t0={18} t1={21} label='Pizza' location='outside' />
            </Day>

            <Day day='Saturday' date='June 9'>
                <DRange t0={10} t1={11} label='Keynote' location='aula' />
                <DRange t0={12} t1={14} label='Lunch' location='mensa' />
                <DRange t0={14} t1={15} label='Keynote' location='aula' />
                <DRange t0={18} t1={21} label='BBQ' location='outside' />
            </Day>

            <Day day='Sunday' date='June 10'>
                <DRange t0={10} t1={11} label='Keynote' location='aula' />
                <DRange t0={12} t1={14} label='Lunch' location='mensa' />
                <DRange t0={15} t1={16} label='Project demos' location='aula' />
                <DPoint t={17} label='End of event' />
            </Day>
        </section>
    </div>
);
