import React from 'react'

export default function AuditIcon({ fill = 'black', opacity = 1 }) {
    return (
        <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
            <path d="M17.9 23.6002L13.05 18.8002L15.15 16.7002L17.85 19.4002L22.85 14.4002L24.95 16.5002L17.9 23.6002ZM39.8 41.9502L26.65 28.8002C25.65 29.6669 24.4833 30.3419 23.15 30.8252C21.8167 31.3085 20.4 31.5502 18.9 31.5502C15.3 31.5502 12.25 30.3002 9.75 27.8002C7.25 25.3002 6 22.2835 6 18.7502C6 15.2169 7.25 12.2002 9.75 9.7002C12.25 7.2002 15.2833 5.9502 18.85 5.9502C22.3833 5.9502 25.3917 7.2002 27.875 9.7002C30.3583 12.2002 31.6 15.2169 31.6 18.7502C31.6 20.1835 31.3667 21.5669 30.9 22.9002C30.4333 24.2335 29.7333 25.4835 28.8 26.6502L42 39.7502L39.8 41.9502ZM18.85 28.5502C21.55 28.5502 23.85 27.5919 25.75 25.6752C27.65 23.7585 28.6 21.4502 28.6 18.7502C28.6 16.0502 27.65 13.7419 25.75 11.8252C23.85 9.90853 21.55 8.9502 18.85 8.9502C16.1167 8.9502 13.7917 9.90853 11.875 11.8252C9.95833 13.7419 9 16.0502 9 18.7502C9 21.4502 9.95833 23.7585 11.875 25.6752C13.7917 27.5919 16.1167 28.5502 18.85 28.5502Z" fill={fill} />
        </svg>
    )
}
