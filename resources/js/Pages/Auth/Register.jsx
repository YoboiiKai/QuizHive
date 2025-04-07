"use client"

import { useState } from "react"
import { Hexagon, Brain, Eye, EyeOff, ArrowLeft, CheckCircle, Info } from "lucide-react"
import { Head, Link, useForm } from '@inertiajs/react'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setData('password', newPassword)

    // Simple password strength calculation
    let strength = 0
    if (newPassword.length >= 8) strength += 1
    if (/[A-Z]/.test(newPassword)) strength += 1
    if (/[0-9]/.test(newPassword)) strength += 1
    if (/[^A-Za-z0-9]/.test(newPassword)) strength += 1

    setPasswordStrength(strength)
  }

  const submit = (e) => {
    e.preventDefault()
    post(route('register'));
  }

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
      <Head title="Register" />
      
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

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 1rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          width: '100%',
          maxWidth: '28rem'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{ position: 'relative' }}>
                <Hexagon style={{ height: '3rem', width: '3rem', color: accentColor }} fill={primaryColor} />
                <Brain style={{
                  height: '1.5rem',
                  width: '1.5rem',
                  color: 'white',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
              <span style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: 'white'
              }}>QuizHive</span>
            </div>
          </div>

          {/* Register Card */}
          <div style={{
            backgroundColor: primaryColor,
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: `1px solid ${secondaryColor}`
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>Create Your Account</h1>
              <p style={{ color: textColorMuted }}>Join QuizHive and start creating amazing quizzes</p>
            </div>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: textColorMuted,
                  marginBottom: '0.25rem'
                }}>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: secondaryColor,
                    border: errors.name ? `1px solid ${errorColor}` : `1px solid ${borderColor}`,
                    borderRadius: '0.75rem',
                    color: 'white',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  required
                />
                {errors.name && (
                  <p style={{ color: errorColor, fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: textColorMuted,
                  marginBottom: '0.25rem'
                }}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: secondaryColor,
                    border: errors.email ? `1px solid ${errorColor}` : `1px solid ${borderColor}`,
                    borderRadius: '0.75rem',
                    color: 'white',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  required
                />
                {errors.email && (
                  <p style={{ color: errorColor, fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: textColorMuted,
                  marginBottom: '0.25rem'
                }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={data.password}
                    onChange={handlePasswordChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      paddingRight: '2.5rem',
                      backgroundColor: secondaryColor,
                      border: errors.password ? `1px solid ${errorColor}` : `1px solid ${borderColor}`,
                      borderRadius: '0.75rem',
                      color: 'white',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    required
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
                    {showPassword ? (
                      <EyeOff style={{ height: '1.25rem', width: '1.25rem' }} />
                    ) : (
                      <Eye style={{ height: '1.25rem', width: '1.25rem' }} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p style={{ color: errorColor, fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.password}
                  </p>
                )}

                {/* Password Strength Indicator */}
                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    marginBottom: '0.25rem'
                  }}>
                    <div style={{
                      height: '0.25rem',
                      flex: 1,
                      backgroundColor: passwordStrength >= 1 ? (
                        passwordStrength === 1 ? '#ef4444' : 
                        passwordStrength === 2 ? '#eab308' : 
                        passwordStrength === 3 ? '#22c55e' : 
                        '#22c55e'
                      ) : '#1d3a6a',
                      borderRadius: '9999px',
                      transition: 'background-color 0.3s'
                    }}></div>
                    <div style={{
                      height: '0.25rem',
                      flex: 1,
                      backgroundColor: passwordStrength >= 2 ? (
                        passwordStrength === 2 ? '#eab308' : 
                        passwordStrength === 3 ? '#22c55e' : 
                        '#22c55e'
                      ) : '#1d3a6a',
                      borderRadius: '9999px',
                      transition: 'background-color 0.3s'
                    }}></div>
                    <div style={{
                      height: '0.25rem',
                      flex: 1,
                      backgroundColor: passwordStrength >= 3 ? (
                        passwordStrength === 3 ? '#22c55e' : 
                        '#22c55e'
                      ) : '#1d3a6a',
                      borderRadius: '9999px',
                      transition: 'background-color 0.3s'
                    }}></div>
                    <div style={{
                      height: '0.25rem',
                      flex: 1,
                      backgroundColor: passwordStrength >= 4 ? '#22c55e' : '#1d3a6a',
                      borderRadius: '9999px',
                      transition: 'background-color 0.3s'
                    }}></div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <Info style={{ height: '0.875rem', width: '0.875rem', color: textColorMuted }} />
                    <span style={{ fontSize: '0.75rem', color: textColorMuted }}>
                      {passwordStrength === 0 && "Use 8+ characters with letters, numbers & symbols"}
                      {passwordStrength === 1 && "Weak - Add uppercase letters"}
                      {passwordStrength === 2 && "Fair - Add numbers"}
                      {passwordStrength === 3 && "Good - Add symbols"}
                      {passwordStrength === 4 && "Strong password"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="password_confirmation" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: textColorMuted,
                  marginBottom: '0.25rem'
                }}>
                  Confirm Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="password_confirmation"
                    type={showConfirmPassword ? "text" : "password"}
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      paddingRight: '2.5rem',
                      backgroundColor: secondaryColor,
                      border: errors.password_confirmation ? `1px solid ${errorColor}` : `1px solid ${borderColor}`,
                      borderRadius: '0.75rem',
                      color: 'white',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    {showConfirmPassword ? (
                      <EyeOff style={{ height: '1.25rem', width: '1.25rem' }} />
                    ) : (
                      <Eye style={{ height: '1.25rem', width: '1.25rem' }} />
                    )}
                  </button>
                </div>
                {errors.password_confirmation && (
                  <p style={{ color: errorColor, fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.password_confirmation}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <div
                    style={{
                      position: 'relative',
                      height: '1.25rem',
                      width: '1.25rem',
                      marginRight: '0.5rem',
                      marginTop: '0.125rem'
                    }}
                    onClick={() => setData('terms', !data.terms)}
                  >
                    <input
                      id="terms"
                      type="checkbox"
                      checked={data.terms}
                      onChange={() => setData('terms', !data.terms)}
                      style={{
                        position: 'absolute',
                        opacity: 0,
                        height: 0,
                        width: 0
                      }}
                    />
                    <div
                      style={{
                        height: '1.25rem',
                        width: '1.25rem',
                        backgroundColor: data.terms ? accentColor : 'transparent',
                        border: data.terms ? 'none' : `1px solid ${borderColor}`,
                        borderRadius: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      {data.terms && <CheckCircle style={{ color: primaryColor, height: '1.25rem', width: '1.25rem' }} />}
                    </div>
                  </div>
                  <label htmlFor="terms" style={{
                    fontSize: '0.875rem',
                    color: textColorMuted,
                    cursor: 'pointer'
                  }}>
                    I agree to the{" "}
                    <a
                      href="/terms"
                      style={{
                        color: accentColor,
                        transition: 'color 0.3s'
                      }}
                      onMouseEnter={(e) => e.target.style.color = accentColorHover}
                      onMouseLeave={(e) => e.target.style.color = accentColor}
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      style={{
                        color: accentColor,
                        transition: 'color 0.3s'
                      }}
                      onMouseEnter={(e) => e.target.style.color = accentColorHover}
                      onMouseLeave={(e) => e.target.style.color = accentColor}
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.terms && (
                  <p style={{ color: errorColor, fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={processing}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: processing ? '#718096' : `linear-gradient(to right, ${accentColor}, #eab308)`,
                  color: primaryColor,
                  borderRadius: '0.75rem',
                  fontWeight: '500',
                  boxShadow: '0 10px 15px -3px rgba(250, 204, 21, 0.2)',
                  border: 'none',
                  cursor: processing ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!processing) {
                    e.target.style.background = `linear-gradient(to right, ${accentColorHover}, #fbbf24)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!processing) {
                    e.target.style.background = `linear-gradient(to right, ${accentColor}, #eab308)`;
                  }
                }}
              >
                {processing ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Login Link */}
              <div style={{
                textAlign: 'center',
                marginTop: '1.5rem'
              }}>
                <p style={{ color: textColorMuted }}>
                  Already have an account?{" "}
                  <a
                    href={route('login')}
                    style={{
                      color: accentColor,
                      fontWeight: '500',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = accentColorHover}
                    onMouseLeave={(e) => e.target.style.color = accentColor}
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Social Registration */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '0',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '100%',
                  borderTop: `1px solid ${borderColor}`
                }}></div>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>
                <span style={{
                  padding: '0 1rem',
                  backgroundColor: primaryColor,
                  color: textColorMuted
                }}>Or sign up with</span>
              </div>
            </div>

            <div style={{
              marginTop: '1.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <button 
                type="button"
                onClick={() => window.location.href = route('google.redirect')}
                style={{
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
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
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
          </div>
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
