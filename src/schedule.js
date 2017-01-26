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

const dMin = 8;
const dMax = 22;

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

const DRange = ({t0, t1, label}) => (
    <div className={styles.dTalk} style={{top: pct((t0 - dMin) / (dMax - dMin)), height: pct((t1 - t0) / (dMax - dMin))}}>
        <div className={styles.timeHeader}>Talk</div>
        <div className={styles.timeHeadline}>{label}</div>
        <div className={styles.timeHours}>{fmtTime(t0)} – {fmtTime(t1)}</div>
    </div>
)

// <DRange t0={14} t1={14.3} label='Bas van Dijk, FP at LumiGuide' />


export default () => (
    <div className={styles.container}>
        <h1 className={styles.h1}>Schedule</h1>

        <p>
            This schedule is temporary. Only the start and end are more or less given.
            The exact schedule will be announced as we'll get closer to the Hackathon.
        </p>

        <section className={styles.schedule}>
            <div className={styles.scheduleLabel}>
                <span>9am</span>
                <span>22pm</span>
            </div>

            <Day day='Friday' date='June 9'>
                <DPoint t={10} label='Welcome & Project Introduction' />
            </Day>

            <Day day='Saturday' date='June 10'>
            </Day>

            <Day day='Saturday' date='June 11'>
                <DPoint t={16} label='Project Presentation & Closing' />
            </Day>
        </section>
    </div>
);
