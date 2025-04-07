"use client"

import { useState } from "react"
import { Hexagon, Brain, Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react"
import { Head, Link, useForm } from '@inertiajs/react'

export default function Login({ status, canResetPassword }) {
  const [showPassword, setShowPassword] = useState(false)
  
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  // Define common styles
  const primaryColor = "#0a1f44";
  const secondaryColor = "#152a4e";
  const accentColor = "#facc15"; // yellow-400
  const accentColorHover = "#fcd34d"; // yellow-300
  const borderColor = "#1d3a6a";
  const textColor = "white";
  const textColorMuted = "#d1d5db"; // gray-300
  const textColorDimmed = "#9ca3af"; // gray-400
  const errorColor = "#ef4444"; // red-500

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Head title="Log in" />
      
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '5rem',
        right: 0,
        width: '16rem',
        height: '16rem',
        backgroundColor: 'rgba(96, 165, 250, 1)',
        borderRadius: '9999px',
        filter: 'blur(60px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '2.5rem',
        width: '18rem',
        height: '18rem',
        backgroundColor: 'rgba(250, 204, 21, 1)',
        borderRadius: '9999px',
        filter: 'blur(60px)'
      }}></div>

      {/* Honeycomb Pattern */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.05
      }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.5v35L30 60 0 42.5v-35L30 0zm0 5.764L5.764 20v30l24.236 14.236L54.236 50V20L30 5.764z' fill='%230a1f44' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Hexagons */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <Hexagon
          style={{
            position: 'absolute',
            color: 'white',
            top: '15%',
            left: '10%',
            width: '80px',
            height: '80px',
            transform: 'rotate(15deg)',
            opacity: 0.3
          }}
        />
        <Hexagon
          style={{
            position: 'absolute',
            color: 'white',
            top: '25%',
            right: '15%',
            width: '60px',
            height: '60px',
            transform: 'rotate(45deg)',
            opacity: 0.2
          }}
        />
        <Hexagon
          style={{
            position: 'absolute',
            color: 'white',
            bottom: '30%',
            left: '20%',
            width: '100px',
            height: '100px',
            transform: 'rotate(30deg)',
            opacity: 0.15
          }}
        />
        <Hexagon
          style={{
            position: 'absolute',
            color: 'white',
            bottom: '15%',
            right: '10%',
            width: '70px',
            height: '70px',
            transform: 'rotate(60deg)',
            opacity: 0.25
          }}
        />
        <Hexagon
          style={{
            position: 'absolute',
            color: 'white',
            top: '60%',
            left: '50%',
            width: '50px',
            height: '50px',
            transform: 'rotate(75deg)',
            opacity: 0.2
          }}
        />
        <Hexagon
          style={{
            position: 'absolute',
            color: 'white',
            top: '40%',
            right: '30%',
            width: '90px',
            height: '90px',
            transform: 'rotate(20deg)',
            opacity: 0.1
          }}
        />
      </div>

      {/* Back to Home */}
      <div style={{
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1.5rem 1rem'
      }}>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'white',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = accentColor}
          onMouseLeave={(e) => e.target.style.color = 'white'}>
          <ArrowLeft style={{ marginRight: '0.5rem' }} />
          Back to Home
        </a>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '28rem',
          width: '100%',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: 'rgba(10, 31, 68, 0.8)',
          backdropFilter: 'blur(8px)',
          borderRadius: '1rem',
          border: `1px solid ${borderColor}`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              backgroundColor: accentColor,
              borderRadius: '0.75rem',
              marginBottom: '1rem'
            }}>
              <Brain size={24} color={primaryColor} />
            </div>
            <h1 style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}>
              Welcome back
            </h1>
            <p style={{ color: textColorMuted }}>Sign in to your QuizHive account</p>
          </div>

          {status && (
            <div style={{
              marginBottom: '1rem',
              padding: '0.75rem',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '0.5rem',
              color: '#22c55e',
              fontSize: '0.875rem',
              fontWeight: 500
            }}>
              {status}
            </div>
          )}

          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: textColor
              }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: errors.email ? `1px solid ${errorColor}` : `1px solid ${borderColor}`,
                  borderRadius: '0.75rem',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
              />
              {errors.email && (
                <div style={{
                  color: errorColor,
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}>
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: textColor
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    paddingRight: '2.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: errors.password ? `1px solid ${errorColor}` : `1px solid ${borderColor}`,
                    borderRadius: '0.75rem',
                    color: 'white',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: textColorMuted,
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <div style={{
                  color: errorColor,
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}>
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember Me */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    position: 'relative',
                    width: '1.25rem',
                    height: '1.25rem',
                    marginRight: '0.5rem'
                  }}
                  onClick={() => setData('remember', !data.remember)}
                >
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={data.remember}
                    onChange={() => setData('remember', !data.remember)}
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer'
                    }}
                  />
                  <div
                    style={{
                      height: '1.25rem',
                      width: '1.25rem',
                      backgroundColor: data.remember ? accentColor : 'transparent',
                      border: data.remember ? 'none' : `1px solid ${borderColor}`,
                      borderRadius: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                  >
                    {data.remember && <CheckCircle style={{ color: primaryColor, height: '1.25rem', width: '1.25rem' }} />}
                  </div>
                </div>
                <label htmlFor="remember-me" style={{
                  fontSize: '0.875rem',
                  color: textColorMuted,
                  cursor: 'pointer'
                }}>
                  Remember me
                </label>
              </div>
              {canResetPassword && (
                <a
                  href={route('password.request')}
                  style={{
                    fontSize: '0.875rem',
                    color: textColorMuted,
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = textColorMuted}
                >
                  Forgot password?
                </a>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '0.75rem 1.5rem',
                backgroundColor: processing ? 'rgba(250, 204, 21, 0.7)' : accentColor,
                color: primaryColor,
                fontWeight: 600,
                borderRadius: '0.75rem',
                border: 'none',
                cursor: processing ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => {
                if (!processing) e.target.style.backgroundColor = accentColorHover
              }}
              onMouseLeave={(e) => {
                if (!processing) e.target.style.backgroundColor = accentColor
              }}
            >
              {processing ? 'Logging in...' : 'Log in'}
            </button>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '0.5rem'
            }}>
              <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: borderColor
              }}></div>
              <span style={{
                padding: '0 0.75rem',
                color: textColorMuted,
                fontSize: '0.875rem'
              }}>Or continue with</span>
              <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: borderColor
              }}></div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <button 
                type="button"
                onClick={() => window.location.href = route('google.redirect')}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '0.75rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = secondaryColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                <svg style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.5rem' }} viewBox="0 0 24 24" fill="white">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button 
                type="button"
                onClick={() => window.location.href = route('facebook.redirect')}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '0.75rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = secondaryColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                <svg style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.5rem' }} fill="white" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1.5rem 1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          <p style={{
            color: textColorDimmed,
            fontSize: '0.875rem',
            marginBottom: '1rem',
            '@media (min-width: 768px)': {
              marginBottom: 0
            }
          }}>
            &copy; {new Date().getFullYear()} QuizHive. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem'
          }}>
            <a href="#" style={{
              color: textColorDimmed,
              fontSize: '0.875rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = textColorDimmed}>
              Terms
            </a>
            <a href="#" style={{
              color: textColorDimmed,
              fontSize: '0.875rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = textColorDimmed}>
              Privacy
            </a>
            <a href="#" style={{
              color: textColorDimmed,
              fontSize: '0.875rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = textColorDimmed}>
              Help
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
