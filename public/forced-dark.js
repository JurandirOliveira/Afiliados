// public/forced-dark.js
console.log("FORCED DARK JS rodou!");

const FORCE_TEST = true;

(function() {
    function showBanner(url) {
        // Remove banner existente se houver
        const existingBanner = document.getElementById('__forced_dark_banner');
        if (existingBanner) {
            existingBanner.remove();
        }

        const banner = document.createElement('div');
        banner.id = '__forced_dark_banner';
        
        banner.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 999999;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 16px 20px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                border-bottom: 1px solid rgba(255,255,255,0.1);
            ">
                <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <!-- Ícone -->
                    <div style="
                        width: 20px;
                        height: 20px;
                        background: rgba(255,255,255,0.9);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        margin-top: 2px;
                    ">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
                            <path d="M12 2L12 6M12 18L12 22M4 12H8M16 12H22M19.07 4.93L16.95 7.05M19.07 19.07L16.95 16.95M4.93 4.93L7.05 7.05M4.93 19.07L7.05 16.95"></path>
                        </svg>
                    </div>
                    
                    <!-- Conteúdo -->
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: white; font-size: 15px; margin-bottom: 4px; line-height: 1.3;">
                            Melhor experiência disponível
                        </div>
                        <div style="color: rgba(255,255,255,0.9); font-size: 13px; line-height: 1.4; margin-bottom: 12px;">
                            Para melhor experiência visual, recomendamos abrir este site em navegador.
                        </div>
                        
                        <!-- Botões -->
                        <div style="display: flex; gap: 8px;">
                            <button id="__forced_dark_close" style="
                                padding: 8px 16px;
                                border: 1px solid rgba(255,255,255,0.3);
                                background: rgba(255,255,255,0.1);
                                border-radius: 8px;
                                color: white;
                                cursor: pointer;
                                font-size: 14px;
                                font-weight: 500;
                                backdrop-filter: blur(10px);
                                transition: all 0.2s ease;
                                flex: 1;
                            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" 
                            onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                                Ignorar
                            </button>
                            <button id="__forced_dark_open" style="
                                padding: 8px 16px;
                                background: rgba(255,255,255,0.95);
                                border: none;
                                border-radius: 8px;
                                color: #667eea;
                                cursor: pointer;
                                font-size: 14px;
                                font-weight: 600;
                                transition: all 0.2s ease;
                                flex: 1;
                            " onmouseover="this.style.background='white'; this.style.transform='translateY(-1px)'" 
                            onmouseout="this.style.background='rgba(255,255,255,0.95)'; this.style.transform='translateY(0)'">
                                Abrir no Navegador
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                #__forced_dark_banner {
                    animation: slideDownBanner 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                @keyframes slideDownBanner {
                    from { 
                        transform: translateY(-100%); 
                        opacity: 0;
                    }
                    to { 
                        transform: translateY(0); 
                        opacity: 1;
                    }
                }
                
                /* Melhorar a experiência em mobile */
                @media (max-width: 480px) {
                    #__forced_dark_banner > div {
                        padding: 14px 16px !important;
                    }
                    
                    #__forced_dark_close,
                    #__forced_dark_open {
                        padding: 10px 12px !important;
                        font-size: 13px !important;
                    }
                }
            </style>
        `;

        document.body.appendChild(banner);

        // Adiciona padding-top ao body para compensar a altura do banner
        const bannerHeight = banner.offsetHeight;
        document.body.style.paddingTop = bannerHeight + 'px';

        // Event listeners
        document.getElementById('__forced_dark_close').addEventListener('click', function() {
            banner.style.animation = 'slideUpBanner 0.3s ease-out forwards';
            setTimeout(() => {
                banner.remove();
                document.body.style.paddingTop = '0';
            }, 300);
        });

        document.getElementById('__forced_dark_open').addEventListener('click', function() {
            window.open(url, '_blank', 'noopener');
        });

        // Adiciona animação de saída
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUpBanner {
                from { 
                    transform: translateY(0); 
                    opacity: 1;
                }
                to { 
                    transform: translateY(-100%); 
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function detectForcedDark() {
        try {
            const testEl = document.createElement('div');
            testEl.style.cssText = 'position:fixed;left:-9999px;width:10px;height:10px;background:#ffffff;color:#000000';
            document.body.appendChild(testEl);

            const computedStyle = window.getComputedStyle(testEl);
            const bgColor = computedStyle.backgroundColor;
            const textColor = computedStyle.color;

            document.body.removeChild(testEl);

            // Verifica se as cores foram invertidas
            const isWhiteBg = bgColor === 'rgb(255, 255, 255)' || bgColor === '#ffffff';
            const isBlackText = textColor === 'rgb(0, 0, 0)' || textColor === '#000000';

            return !(isWhiteBg && isBlackText);
        } catch (error) {
            console.error('Error detecting forced dark:', error);
            return false;
        }
    }

    // Aguarda o DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('Initializing forced dark detection...');
        
        // Pequeno delay para garantir que tudo carregou
        setTimeout(() => {
            if (FORCE_TEST || detectForcedDark()) {
                console.log('Forced dark detected, showing banner');
                showBanner(window.location.href);
            } else {
                console.log('Forced dark not detected');
            }
        }, 100);
    }

})();