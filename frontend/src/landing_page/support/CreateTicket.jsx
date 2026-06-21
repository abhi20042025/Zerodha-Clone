import React, { useState } from 'react';

const CreateTicket = () => {
  // Track which accordion item ID is currently open (default to 1 for Account Opening)
  const [openCategoryId, setOpenCategoryId] = useState(1);

  const toggleAccordion = (id) => {
    // If it's already open, clicking it again closes it (sets to null), otherwise opens the clicked one
    setOpenCategoryId(openCategoryId === id ? null : id);
  };

  const categories = [
    { 
      id: 1, 
      title: 'Account Opening', 
      links: [
        'Online Account Opening',
        'Offline Account Opening',
        'Company, Partnership and HUF NRI Account Opening',
        'Charges for Account Opening',
        'Government statutory documents',
      ],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      )
    },
    { 
      id: 2, 
      title: 'Your Zerodha Account', 
      links: [
        'Your Profile',
        'Account modification',
        'Client Master Report (CMR) and Depository Participant (DP)',
        'Nomination',
        'Transfer and conversion of securities'
      ],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    { 
      id: 3, 
      title: 'Kite', 
      links: [
        'IPO',
        'Trading FAQs',
        'Margin Trading Facility (MTF) and Margins',
        'Charts and orders',
        'Alerts and Nudges',
        'General'
      ],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      )
    },
    { 
      id: 4, 
      title: 'Funds', 
      links: [
        'Add money',
        'Withdraw money',
        'Add bank accounts',
        'eMandates'
      ],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    { 
      id: 5, 
      title: 'Console', 
      links: [
        'Portfolio',
        'Corporate actions',
        'Funds statement',
        'Reports',
        'Profile',
        'Segments'
      ],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      )
    },
    { 
      id: 6, 
      title: 'Coin', 
      links: [
        'Mutual funds',
        'National Pension System (NPS)',
        'Fixed Deposit (FD)',
        'Features on Coin',
        'Payments and Orders',
        'General'
      ],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
  ];

  return (
    <div style={styles.mainContainer}>
      <div style={styles.grid}>
        
        {/* Left Column (Accordions) */}
        <div style={styles.leftColumn}>
          {categories.map((cat) => {
            const isCurrentOpen = openCategoryId === cat.id;
            return (
              <div 
                key={cat.id} 
                style={{
                  ...styles.accordionWrapper,
                  borderColor: isCurrentOpen ? '#000000' : '#eef2f5',
                  borderWidth: isCurrentOpen ? '1.5px' : '1px'
                }}
              >
                {/* Header Row (Clickable) */}
                <div style={styles.accordionHeader} onClick={() => toggleAccordion(cat.id)}>
                  <div style={styles.accordionLeft}>
                    <span style={styles.iconWrapper}>{cat.icon}</span>
                    <span style={styles.accordionTitle}>{cat.title}</span>
                  </div>
                  <span style={{
                    ...styles.arrow,
                    transform: isCurrentOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#387ed1" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>

                {/* Dropdown Body Links */}
                {isCurrentOpen && (
                  <div style={styles.dropdownBody}>
                    <ul style={styles.linksList}>
                      {cat.links.map((link, index) => (
                        <li key={index} style={styles.linkItem}>
                          <a href="#" style={styles.dropdownLink}>{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div style={styles.rightColumn}>
          <div style={styles.noticeBox}>
            <ul style={styles.noticeList}>
              <li><a href="#" style={styles.linkText}>MCX is launching Silver 100 (100 gram) futures contracts</a></li>
              <li style={{ marginTop: '14px' }}><a href="#" style={styles.linkText}>Surveillance measure on scrips - May 2026</a></li>
            </ul>
          </div>

          <div style={styles.quickLinksContainer}>
            <h3 style={styles.quickLinksHeader}>Quick links</h3>
            <div style={styles.quickLinksList}>
              <a href="#" style={styles.quickLinkItem}>1. Track account opening</a>
              <a href="#" style={styles.quickLinkItem}>2. Track segment activation</a>
              <a href="#" style={styles.quickLinkItem}>3. Intraday margins</a>
              <a href="#" style={styles.quickLinkItem}>4. Kite user manual</a>
              <a href="#" style={{...styles.quickLinkItem, borderBottom: 'none'}}>5. Learn how to create a ticket</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: '#ffffff',
    padding: '10px 20px 40px 20px',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  grid: {
    maxWidth: '1050px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.9fr 1.1fr',
    gap: '50px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  accordionWrapper: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.01)',
    overflow: 'hidden',
    transition: 'border-color 0.2s ease',
  },
  accordionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  accordionLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  accordionTitle: {
    fontSize: '18px',
    color: '#444444',
    fontWeight: '400',
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.2s ease',
  },
  dropdownBody: {
    padding: '0px 24px 24px 64px', // Aligns list directly under text, skipping icon margin
    backgroundColor: '#ffffff',
    borderTop: '1px solid #f9f9f9',
  },
  linksList: {
    margin: 0,
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  linkItem: {
    color: '#387ed1',
  },
  dropdownLink: {
    color: '#387ed1',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  noticeBox: {
    backgroundColor: '#fffaf4',
    borderLeft: '3px solid #ff9800',
    padding: '22px 20px',
    borderRadius: '0 4px 4px 0',
  },
  noticeList: {
    margin: 0,
    paddingLeft: '18px',
  },
  linkText: {
    color: '#387ed1',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  quickLinksContainer: {
    backgroundColor: '#fbfbfb',
    border: '1px solid #eef2f5',
    borderRadius: '4px',
  },
  quickLinksHeader: {
    margin: 0,
    padding: '14px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#444',
    borderBottom: '1px solid #eef2f5',
  },
  quickLinksList: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  quickLinkItem: {
    display: 'block',
    padding: '14px 20px',
    color: '#387ed1',
    textDecoration: 'none',
    fontSize: '14px',
    borderBottom: '1px solid #eef2f5',
  }
};

export default CreateTicket;